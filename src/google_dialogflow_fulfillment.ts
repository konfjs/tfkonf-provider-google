import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowFulfillmentArgsFeatures {
  type: string;
}

export interface GoogleDialogflowFulfillmentArgsGenericWebService {
  password?: string;
  request_headers?: { [key: string]: string };
  uri: string;
  username?: string;
}

export interface GoogleDialogflowFulfillmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowFulfillmentArgs {
  display_name: string;
  enabled?: boolean;
  features?: GoogleDialogflowFulfillmentArgsFeatures[];
  generic_web_service?: GoogleDialogflowFulfillmentArgsGenericWebService;
  timeouts?: GoogleDialogflowFulfillmentArgsTimeouts;
}

export class google_dialogflow_fulfillment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDialogflowFulfillmentArgs) {
    const meta = {features:{isBlock:true},generic_web_service:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_fulfillment", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
