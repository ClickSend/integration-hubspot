# Hubspot Integration

This tutorial will shows how to send automated SMS using ClickSend API using the Hubspot CRM.  For troubleshooting purposes please [contact our support team](https://www.clicksend.com/help?utm_source=github&utm_medium=referral&utm_campaign=integration-sqs&utm_content=contact-support).

#### Prequisites:

To get started you will need:

- A ClickSend account -
    [Sign-Up](https://www.clicksend.com/signup?utm_source=github&utm_medium=referral&utm_campaign=integration-sqs&utm_content=pre-requisites)
- A Hubspot account - [Sign-Up](https://app.hubspot.com/signup-hubspot/crm?hubs_signup-cta=login-signup-cta&hubs_signup-url=app.hubspot.com%2Flogin&uuid=6d8713b6-037b-45ae-b99c-b1cd982d9849&step=landing_page)
- A Hubspot CRM Operations Professional Plan or Higher - [Plan Pricing](https://app.hubspot.com/pricing/22065255/operations?products=operations-hub-starter_1&term=annual)

#### Configuring the trigger/s for the workflow:

1. Click on the "Automation" tab from the menu bar and select "Workflows" from the drpdown menu. 
  
    <img width="" alt="SelectWorkflow" src="https://user-images.githubusercontent.com/66475561/171106218-4daef527-c496-4052-97c3-7880c6532b37.png">
  
2. Click on "Create workflow" button.

    <img width="" alt="CreateWorkflow" src="https://user-images.githubusercontent.com/66475561/171106567-a7b8180f-ac48-4c29-8a5d-48a564e36745.png">
  
3. To keep this guide simple we will select "Contact-based" blank workflow, you can select any trigger you like as long as it contains the phone number field. After selecting the trigger and naming the workflow click on the "Next" button.

    <img width="" alt="ContactWorkflow" src="https://user-images.githubusercontent.com/66475561/171107617-c64bd239-f38a-40ed-843f-f467d7d599dc.png">
  
4. Click on the "Set up triggers" button and filter on how the contacts enter the workflow.

    <img width="" alt="Filter" src="https://user-images.githubusercontent.com/66475561/171109793-702aa901-df69-4834-9f1b-ecd358e1488d.png">
  
5. For simplicity purposes we will filter contacts based on if the phone number field does not contain the alphabet 'a', so that we can select every contact. After setting up the filter click on the "Apply filter" button.

    <img width="" alt="FilterPhone" src="https://user-images.githubusercontent.com/66475561/171111762-573f796d-7d5c-4ff4-af48-3eddffaef56a.png"> 

6. If you want to cross check the filter setup click on "Test criteria" button. Click on "Save" button to save filter/s after the configuration.

    <img width="" alt="TestSaveFilter" src="https://user-images.githubusercontent.com/66475561/171113227-e3096f52-ac26-40cb-8da5-8af649316ce8.png">

#### Configuring the action for the workflow:

8. Click on the "+" button to add the action.

    <img width="" alt="AddAction" src="https://user-images.githubusercontent.com/66475561/171116487-f64ea5b8-67a3-4b20-b76a-63a484ba8f99.png">
