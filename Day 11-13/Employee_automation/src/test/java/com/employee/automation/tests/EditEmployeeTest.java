package com.employee.automation.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.employee.automation.base.BaseTest;
import com.employee.automation.pages.EmployeePage;
import com.employee.automation.pages.LoginPage;

public class EditEmployeeTest extends BaseTest {

    @Test
    public void editEmployeeTest() throws Exception {

        // Login
        LoginPage loginPage = new LoginPage(driver);
        loginPage.login(
                "rakshitharamesh2027@gmail.com",
                "rakshitha@1234"
        );

        Thread.sleep(2000);

        // Employee Page
        EmployeePage employeePage = new EmployeePage(driver);

        employeePage.openEmployeePage();

        Thread.sleep(2000);

        // Search Employee
        employeePage.searchEmployee("Automation Test");

        Thread.sleep(2000);

        // Click Edit
        employeePage.clickEdit();

        Thread.sleep(2000);

        // Update Name
        employeePage.updateEmployeeName("Automation Updated");

        Thread.sleep(1000);

        // Save
        employeePage.clickUpdate();

        Thread.sleep(3000);

        // Verify
        employeePage.searchEmployee("Automation Updated");

        Assert.assertEquals(
                employeePage.getFirstEmployeeName(),
                "Automation Updated"
        );

        System.out.println("================================");
        System.out.println("Employee Updated Successfully");
        System.out.println("================================");
    }
}