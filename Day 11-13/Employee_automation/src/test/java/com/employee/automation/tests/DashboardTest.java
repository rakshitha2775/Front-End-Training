package com.employee.automation.tests;

import org.testng.annotations.Test;

import com.employee.automation.base.BaseTest;
import com.employee.automation.pages.EmployeePage;
import com.employee.automation.pages.LoginPage;


public class DashboardTest extends BaseTest {


    @Test
    public void addEmployeeTest() throws Exception {


        // Login
        LoginPage loginPage = new LoginPage(driver);


        loginPage.login(
                "rakshitharamesh2027@gmail.com",
                "rakshitha@1234"
        );


        Thread.sleep(2000);



        // Employee Page Object
        EmployeePage employeePage =
                new EmployeePage(driver);



        // IMPORTANT:
        // Open Add Employee Form
        employeePage.openAddEmployeeForm();



        Thread.sleep(1000);



        // Fill Employee Form
        employeePage.fillEmployeeForm(

                "EMP1000",

                "Dashboard Test",

                "dashboard@test.com",

                "Dashboard@123",

                "9876543211",

                "Testing",

                "QA Engineer",

                "50000"

        );



        // Save
        employeePage.clickSave();



        Thread.sleep(3000);



        System.out.println(
                "=================================="
        );

        System.out.println(
                "Dashboard Employee Added Successfully"
        );

        System.out.println(
                "=================================="
        );

    }

}
