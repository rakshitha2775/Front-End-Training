package com.employee.automation.tests;

import org.testng.annotations.Test;

import com.employee.automation.base.BaseTest;
import com.employee.automation.pages.EmployeePage;
import com.employee.automation.pages.LoginPage;


public class EmployeeTest extends BaseTest {


    @Test
    public void addEmployeeTest() throws Exception {


        // Login
        LoginPage loginPage = new LoginPage(driver);


        loginPage.login(
            "rakshitharamesh2027@gmail.com",
            "rakshitha@1234"
        );


        Thread.sleep(3000);



        // Employee Page Object
        EmployeePage employeePage =
                new EmployeePage(driver);



        // Open Add Employee Form
        employeePage.openAddEmployeeForm();



        Thread.sleep(1000);



        // Fill Form

        employeePage.fillEmployeeForm(

                "EMP999",

                "Automation Test",

                "automation@test.com",

                "Automation@123",

                "9876543210",

                "Testing",

                "QA Engineer",

                "45000"

        );



        // Save

        employeePage.clickSave();



        Thread.sleep(3000);



        System.out.println(
                "Employee Added Successfully"
        );


    }


}