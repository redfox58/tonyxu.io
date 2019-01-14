---
title: "创建Alfred Workflow上传截图到S3"
date: 2018-07-08
description: "Markdown语言正在变得越来越流行，大多数人在使用Markdown语言的时候都会需要粘贴图片，然而Markdown粘贴图片必须要用链接。今天我想向大家介绍如何创建一个Alfred workflow来自动上传你剪切板里的图片到S3并获取公开链接。"
---

# 创建Alfred Workflow上传截图到S3

Markdown语言正在变得越来越流行，大多数人在使用Markdown语言的时候都会需要粘贴图片，然而Markdown粘贴图片必须要用链接。今天我想向大家介绍如何创建一个Alfred workflow来自动上传你剪切板里的图片到S3并获取公开链接。

## 演示

![2018-07-08+21_33_30.gif](./2018-07-08+21_33_30.gif)

## 主要步骤

1. 使用 `pngpaste` 获取剪切板图片
2. 把图片写到临时文件夹 `/tmp`
3. 使用`boto3`上传图片到AWS S3

## 实现

现在我们知道主要步骤，接下来就是编写Alfred Workflow的Python脚本实现了。

### 创建 Alfred workflow

创建 `Blank Workflow` 并命名

右键空白区域并选择`Inputs -> Keyword`

![2018_07_08_20_56_57.png](./2018_07_08_20_56_57.png)

指定触发workflow的关键词

![2018_07_08_20_50_57.png](./2018_07_08_20_50_57.png)

右键空白区域并选择`Actions -> Run Script`

让我们让它执行Python脚本

![2018_07_08_20_58_41.png](./2018_07_08_20_58_41.png)

点击`Cancel`左侧的按钮来打开workflow文件夹

创建脚本文件(确保文件名和你在上面步骤制定的脚本名一致, 并按照如下所述编写脚本

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
from __future__ import print_function
import datetime
import os
import sys
import atexit
import imghdr
from subprocess import call
from os.path import expanduser, exists, basename, getsize
from workflow import Workflow

def capture():
    file_name = datetime.datetime.now().strftime('%Y_%m_%d_%H_%M_%S.png')
    file_path = os.path.join('/tmp', file_name)
    atexit.register(lambda x: os.remove(x) if os.path.exists(x) else None, file_path)
    save = call(['./pngpaste', file_path])
    if save == 1:
        # Quit job if no image found in clipboard
        print "No image found in clipboard"
        sys.exit()
    return file_path, file_name

def main(wf):
    import boto3
    file_path, file_name = capture()
    bucket_name = os.getenv('bucket_name')
    s3 = boto3.client(
        's3',
        aws_access_key_id=os.getenv('access_key'),
        aws_secret_access_key=os.getenv('secret_key')
    )
    s3.upload_file(file_path, bucket_name, file_name, ExtraArgs={'ContentType': "image/png"})
    output = "%s/%s" %(os.getenv('bucket_uri'), file_name)
    print (output,end='')

if __name__ == '__main__':
    wf = Workflow(libraries=['./lib'])
    sys.exit(wf.run(main))
```

这个脚本会返回图片的公开链接，我们可以通过系统推送通知用户链接已经生成成功

右键空白区域，并选择 `Outputs –> Copy to Clipboard`

![2018_07_08_21_06_32.png](./2018_07_08_21_06_32.png)

右键空白区域，并选择 `Outputs –> Post Notification`

![2018_07_08_21_06_54.png](./2018_07_08_21_06_54.png)

接下来，像我一样连接这些盒子:

![2018_07_08_21_07_52.png](./2018_07_08_21_07_52.png)

### 添加第三方库

在脚本中，我们用到了如下第三方库，需要确保workflow可以访问

- [Workflow](http://alfredworkflow.readthedocs.io/en/latest/installation.html)
- [awscli](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- [boto3](https://boto3.readthedocs.io/en/latest/guide/quickstart.html#installation)
- [pngpaste](https://github.com/jcsalterego/pngpaste)

安装第三方库:

```sh
pip install --target=/path/to/workflow Alfred-Workflow
pip install --target=/path/to/workflow/lib awscli
pip install --target=/path/to/workflow/lib boto3
brew install pngpaste
```

请注意pngpaste命令行工具的二进制文件需要被复制到`/path/to/workflow`.

### 添加环境变量

在脚本中，我们用到了这些环境变量:

- access_key: S3 access key

- secret_key: S3 access secret

- bucket_name: S3 bucket 名. 例如 `my-bucket-name`

- bucket_uri: S3 bucket URI 不含结尾斜杠. 例如 `https://s3-us-west-1.amazonaws.com/my-bucket-name`

添加并配置到环境变量设置:

![2018_07_10_20_55_19.png](./2018_07_10_20_55_19.png)

如果你还没有access key 和 secret, 跟随教程创建他们:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

确保用户可以读写S3 bucket.

## 完成

恭喜，你已经完成。现在可以尝试了。

## 拓展

你可能会想添加支持上传任意本地图片到S3, 推荐你自己尝试实现它。

下载参考源码:

[tonyxu-io/Alfred-Workflow-Upload-S3](https://github.com/tonyxu-io/Alfred-Workflow-Upload-S3)

参考资料:

- [使用 Alfred workflow 上传截图到七牛并自动生成外链URL](http://xfyuan.github.io/2017/03/use-alfred-to-auto-upload-screenshot-to-qiniu-and-generate-the-markdown-image-url/)
- [Alfred Workflow —— 上传剪贴板的图片到七牛](http://labmain.com/2016/04/06/A_Alfred_Workflow_upload_clipboard%27image_to_qiniu/)