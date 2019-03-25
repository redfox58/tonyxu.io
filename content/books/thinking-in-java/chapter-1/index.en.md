---
title: Chapter 1 - Introduction to Objects
date: 2019-03-24
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

## Reusing the implementation

Code reuse is one of the greatest advantages that object-oriented programming languages provide.

You can reuse the implementation by:

- Composition: Use the class inside a new class
- Inheritance: Clone the existing class, then make additions and modifications to the clone.

## Inheritance

New type cloned from existing type, contains not only all the members of the existing type, but more importantly it duplicates the interface of the base class.

You can make the two types different by:

- Add new methods to the derived class
- Change the behavior of an existing base-class method (Overriding)

## Is-a vs. is-like-a relationships

`Is-a`: derived class is exactly the same type as the base class, and you can state. For example, "A circle is a shape.".
`Is-like-a`: the new type has the interface of the old type but it also contains other methods, so you can't really say it's exactly the same. For example, the heat pump is-like-an air conditioner.

## Interchangeable objects with polymorphism

In compile time, you don't know which derived type will call the method from base type. It can only be determined when the code is being executed.

## The singly rooted hierarchy

In Java, all classes are ultimately be inherited from a single base class, _Object_.

## Containers

A new object, called a _container_, holds references to other objects, will expand itself whenever necessary to accommodate everything you place inside it.

### Parameterized types (generics)

Before Java SE5, containers hold the one universal type in Java: _Object_. From Java SE5, _generics_ in Java allow you to create parameterized container that could be customized so that it would accept only a particular type.

This eliminates the cost of downcasting and runtime checks for the upcasted object when fetch it back from container at run time.

## Exception handling: dealing with errors

An exception is an object that is "thrown" from the site of the error and can be "caught" by an appropriate exception handler designed to handle that particular type of error. Exceptions provide a way to reliably recover from  a bad situation.

## Concurrent programming

Java's concurrency is built into the language, and Java SE5 has added significant additional library support.

## Java and the Internet

- What is the Web?: the Web is actually one giant client/server system.
- Client-side programming: the web browser is harnessed to do whatever work it can, and the result for the user is a much speedier and more interactive experience at your Web site.
- Server-side programming: your server may process a request via some code, which is generally referred to as server-side programming.