---
title: 程序员的Mac终端(oh-my-zsh)终极美化及必备插件推荐
date: 2018-07-26
---

如果你使用Mac进行开发，那么`Terminal.app`应该是你使用非常频繁的app了。初体验Terminal时你可能觉得单调乏味，阅读密密麻麻的内容也很费劲。但是如果你跟着我一起配置它，就会发现你平时觉得繁琐，不方便的地方其实都可以被完美解决,并且颜值也高了许多。

![screenshot](images/screenshot.png)

## 我们准备这样改造Terminal

1. 修改Terminal的Profile: 让Terminal配色更美观
2. 安装`oh-my-zsh`: 将Terminal的shell从bash改成更强大的zsh
3. 安装`oh-my-zsh`主题: 美化`oh-my-zsh`
4. 安装`oh-my-zsh`必备插件: 让Terminal具有更高级和便利的功能

## 准备工作

建议先安装homebrew, 方便后续工具安装:

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

如果你的macOS版本早于Catalina，你需要手动安装zsh:

```sh
# 安装 zsh
brew install zsh
# 设置zsh为你的默认shell
chsh -s /usr/local/bin/zsh
```

## 修改Terminal Profile 主题设置

1. 在GitHub的[osx-terminal-theme](https://github.com/lysyi3m/osx-terminal-themes)项目主页里寻找你喜欢的主题
2. 在schemes目录里找到对应的主题文件并双击安装到Terminal, 设置为默认

如果您觉得我的主题颜色不错，可以试试我的主题配置: https://gist.github.com/tonyxu-io/6b845cb1a53622eb4f1ce4063365e427

## 安装oh-my-zsh

Oh My Zsh 是一个令人愉快的、开源的、社区驱动的管理zsh配置的框架。它为我们带来了数千个有用的功能、助手、插件、主题，和其他一些令你惊叹的功能...

安装`oh-my-zsh`:

```sh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 安装oh-my-zsh主题

### 内置主题列表

`oh-my-zsh`提供一批内置主题，可以直接设置使用

1. 在内置主题列表寻找你你喜欢的主题: https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
2. 在`~/.zshrc`配置文件里设置`ZSH_THEME`为你的主题名称
3. 激活设置`source ~/.zshrc`

### 第三方主题列表

许多第三方也开发了供`oh-my-zsh`使用的主题，可以去第三方主题列表查看和安装:

[https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes](https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes)

## 安装oh-my-zsh必备插件

`oh-my-zsh`有非常丰富的插件可供使用，下面列举一些必备插件，可以大幅提高生产力。

示例如下:

```sh
# ~/.zshrc:
plugins=(
  git
  extract
  autojump
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

### git

自带插件，可以使用缩写命令, 比如 `gaa` -> `git add --all`, 通过`alias | grep git`查看所有支持缩写命令

激活: 添加到`~/.zshrc`的plugins列表

### extract

自带插件，不用再使用复杂的`tar`来解压压缩包了

激活: 添加 `extract` 到 `~/.zshrc` 的plugins列表

### autojump

使用`j`命令直接快速进入某个目录, 比如 `j Downloads` -> `cd ~/Downloads`

安装: `brew install autojump`

激活: 添加 `autojump` 至 `~/.zshrc` 配置文件的插件列表。

### zsh-syntax-highlighting

命令高亮插件，命令不再只是同一个颜色了

安装: `brew install zsh-syntax-highlighting`

激活: 添加 `zsh-syntax-highlighting` 至 `~/.zshrc` 配置文件的插件列表。

### zsh-autosuggestions

输入时按右方向键→自动补全命令

安装: `brew install zsh-autosuggestions`

激活: 添加 `zsh-autosuggestions` 至 `~/.zshrc` 配置文件的插件列表。

## 我自己的`~/.zshrc`配置

```sh
# Path to your oh-my-zsh installation.
export ZSH=/Users/tonxu/.oh-my-zsh

# theme
ZSH_THEME="robbyrussell"

# plugins
plugins=(
  git
  extract
  autojump
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# set language
export LANG=en_US.UTF-8

# default editor
export EDITOR='vi'

# ssh key path
export SSH_KEY_PATH="~/.ssh/rsa_id"
```
