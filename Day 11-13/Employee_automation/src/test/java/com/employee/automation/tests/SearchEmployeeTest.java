package com.employee.automation.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.employee.automation.base.BaseTest;
import com.employee.automation.pages.EmployeePage;
import com.employee.automation.pages.LoginPage;

public class SearchEmployeeTest extends BaseTest {

    @Test
    public void searchEmployeeTest() throws Exception {

        LoginPage login = new LoginPage(driver);

        login.login(
                "rakshitharamesh2027@gmail.com",
                "rakshitha@1234"
        );

        EmployeePage employee = new EmployeePage(driver);

        employee.openEmployeePage();

       employee.searchEmployee("Rakshitha");

        Assert.assertTrue(
        employee.getFirstEmployeeName().contains("Rakshitha")
);

        System.out.println("Search Employee Test Passed");
    }
}