import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Function, Runtime, Code, FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


     // lambda function
     const myFunction = new Function(this, "axiosLambdaHandler", {
      runtime: Runtime.NODEJS_14_X,
      functionName:'testasses',
      code: Code.fromAsset('./src/asess.zip'),
      memorySize: 1024,
      handler: "index.handler",
    
    });

    const myFunctionUrl = myFunction.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ['*'],
      }
    });

    new CfnOutput(this, 'FunctionUrl', {
      value: myFunctionUrl.url,
    });


  }
}
