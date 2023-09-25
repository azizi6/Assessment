Sure, here's an updated README file with additional information for the HTML page, including how to display the address details:


This guide will walk you through deploying the AWS CDK stack and updating the Lambda function URL in your HTML file, which includes a form to input an address and displays address details upon submission.

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

1. [AWS CLI](https://aws.amazon.com/cli/) installed and configured with the necessary credentials.
2. [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your local machine.
3. [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) installed on your local machine.

## Step 1: Clone the Repository

Clone your GitHub repository to your local machine:

```sh
git clone <repository-url>
cd <repository-folder>
```

## Step 2: CDK Stack Deployment

### Deploy the CDK Stack

1. Open a terminal and navigate to the root directory of your CDK project.
2. Run the following commands to deploy the CDK stack:

```sh
cdk init
cdk deploy
```

Follow the prompts to deploy the CDK stack to your AWS account.

### Note Down the Lambda Function URL

After successfully deploying the CDK stack, the Lambda function URL will be displayed in the terminal. Note down this URL, as you will need it in the next step.

## Step 3: Update the HTML File

### Update Lambda Function URL in HTML

1. Open the `index.html` file in your preferred text editor.
2. Locate the following line in your HTML code:

```javascript
const lambdaUrl = 'https://havewdndiwa4gqfhah6g4wukb40ljbkm.lambda-url.ap-southeast-2.on.aws/';
```

3. Replace the URL inside the single quotes with the Lambda function URL you noted down in **Step 2**.

```javascript
const lambdaUrl = 'YOUR-LAMBDA-FUNCTION-URL-GOES-HERE';
```

4. Save the changes to the HTML file.

### HTML Form for Address Input

The HTML page includes a form to input an address and displays address details upon submission. The JavaScript code already handles this functionality.

To display the address details, the following variables are available in the JavaScript code:

```javascript
const latitude = data.coordinates[0];
const longitude = data.coordinates[1];
const suburbName = data.suburbName;
const electoralDistrictName = data.districtName;
```

These variables contain the address details returned by the Lambda function.

## Step 4: Commit and Push Changes

Commit your changes and push them to your GitHub repository:

```sh
git add .
git commit -m "Updated Lambda function URL in HTML"
git push
```

## Step 5: Access the HTML Page

Your CDK stack is now deployed, and the HTML file is updated with the correct Lambda function URL. You can access the HTML page by opening it in a web browser or hosting it on a web server.

That's it! You've successfully deployed your CDK stack, updated the Lambda function URL in your HTML file, and added address input functionality with details display.
```

These instructions provide additional information on the HTML page's form for address input and how to display address details using the JavaScript variables you mentioned.