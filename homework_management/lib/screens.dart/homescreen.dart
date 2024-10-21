import 'package:flutter/material.dart';
import 'package:homework_management/screens.dart/completed_tasks.dart';
import 'package:homework_management/screens.dart/tasks_screen.dart';

class Homescreen extends StatefulWidget {
  const Homescreen({super.key});

  @override
  State<Homescreen> createState() => _HomescreenState();
}

class _HomescreenState extends State<Homescreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Homework Management'),
        centerTitle: true,
        backgroundColor: Colors.white,
        
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Welcome Back!'),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context) => const ManageTasks()));
              },
              child: const Text('Manage tasks'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context) => const TaskCompleted()));
              },
              child: const Text('Task Completed'),
            ),
           
          ]
        )
      )

    );
  }
}

