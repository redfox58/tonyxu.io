---
title: Chapter 1 - Introduction to Objects
date: 2019-03-21
---

## The progress of abstraction

Five basic characteristics of object-oriented programming:

- Everything is an object.
- A program is a bunch of objects telling each other what to do by sending messages.
- Each object has its own memory made up of other objects.
- Every object has a type
- All objects of a particular type can receive the same messages.

## An object has an interface

The interface determines what request you can make for a particular object.

## An object provides services

Treating objects as service providers is a great simplifying tool. It helps to improve the cohesiveness of the object.

## The hidden implementation

Java uses three explicit keywords to set the boundaries in a class:

- `public`: The following element is available to everyone
- `private`: No one can access that element except you, the creator of the type, inside methods of that type.
- `protected`: Acts like `private`, with the exception that an inheriting class has access to `protected` members, but not `private`members.
