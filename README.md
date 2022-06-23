# Hubspot Integration

This tutorial will shows how to send automated SMS using ClickSend API using the Hubspot CRM.  For troubleshooting purposes please [contact our support team](https://www.clicksend.com/help?utm_source=github&utm_medium=referral&utm_campaign=integration-sqs&utm_content=contact-support).

#### Prequisites:

To get started you will need:

- A ClickSend account -
    [Sign-Up](https://www.clicksend.com/signup?utm_source=github&utm_medium=referral&utm_campaign=integration-sqs&utm_content=pre-requisites)
- A Hubspot account - [Sign-Up](https://app.hubspot.com/signup-hubspot/crm?hubs_signup-cta=login-signup-cta&hubs_signup-url=app.hubspot.com%2Flogin&uuid=6d8713b6-037b-45ae-b99c-b1cd982d9849&step=landing_page)
- A Hubspot CRM Operations Professional Plan or Higher - [Plan Pricing](https://app.hubspot.com/pricing/22065255/operations?products=operations-hub-starter_1&term=annual)

#### Configuring the trigger/s for the workflow:

1. Click on the "Automation" tab from the menu bar and open the "Workflows" in a new tab from the drpdown menu. 
  
    <img width="" alt="SelectWorkflow" src="https://user-images.githubusercontent.com/66475561/171551258-56f52963-e5cd-4cdb-a10b-11a8911a3e6f.png">
  
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

7. Switch to the previous tab and click on the "Settings" icon.

    <img width="" alt="Settings" src="https://user-images.githubusercontent.com/66475561/171551905-05f9f07c-7705-4fdc-a7ec-7299db9c1774.png">
    
8. Click and copy the API key from the Settings menu.

    <img width="" alt="API" src="https://user-images.githubusercontent.com/66475561/171552660-7108cb83-8c2d-486d-925d-bace2d9691cc.png">

9. Switch to workflows tab and click on the "+" button to add the action.

    <img width="" alt="AddAction" src="https://user-images.githubusercontent.com/66475561/171116487-f64ea5b8-67a3-4b20-b76a-63a484ba8f99.png">
    
10. Click on "Custom code" from the action list.

    <img width="" alt="Code" src="https://user-images.githubusercontent.com/66475561/171549087-d72ba017-382c-435a-b513-33ef71c3cb79.png">
    
11. Click on "Choose a secret" dropdown menu and select "Add secret" to add your Hubspot API Key.

    <img width="" alt="HSS" src="https://user-images.githubusercontent.com/66475561/171553371-11d7fd05-5ec0-4724-a70f-16c7c4d1e26b.png">
    
12. Type "HPKEY" as "Secret name" and paste the Hubspot API Key under the "Secret value". Click on "Save" button.

    <img width="" alt="HSP" src="https://user-images.githubusercontent.com/66475561/171553987-103ea2fb-2871-4964-8bb9-7d3f8f9e4acd.png">
    
13. We will need your ClickSend credentials to send SMS - [ClickSend Credentials](https://dashboard.clicksend.com/account/subaccounts?utm_source=github&utm_medium=referral&utm_campaign=integration-sqs&utm_content=cs-credentials)
    
14. Copy your username from the ClickSend dashboard and click on "Add secret".

    <img width="" alt="CSUD" src="https://user-images.githubusercontent.com/66475561/171555139-07b5bb00-3e85-424c-9895-1b7268a91daa.png">
    
15. Type "CSUSERNAME" as "Secret name" and paste the username under the "Secret value". Click on "Save" button.

    <img width="" alt="CSUH" src="https://user-images.githubusercontent.com/66475561/171556938-3179c4dd-8307-4041-8c8b-c8b6ef2b812a.png">

16. Repeat the steps 14 and 15 to add your ClickSend API Key, use "CSKEY" as "Secret name" and API Key as "Secret value".

    <img width="" alt="CSUK" src="https://user-images.githubusercontent.com/66475561/175233304-de0381f1-2029-4bf6-bfd0-ff7e333012e2.png">
    
17. Remove the existing code, then copy and paste the code from "Hubspot_CustomCode.js" in the "Code" section.
    
    <img width="" alt="CSUC" src="https://user-images.githubusercontent.com/66475561/175239615-973c89bf-ada3-4094-b6f1-7af66c033d14.png">

18. Change the content of message body as per the need. Click on the "Save" button after making te changes.

    <img width="" alt="CSUM" src="https://user-images.githubusercontent.com/66475561/175241369-38f4eb6f-efaa-4540-ad63-d2ffa6c0a882.png">
