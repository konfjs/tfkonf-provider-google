import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBeyondcorpAppConnectionArgsApplicationEndpoint {
  host: string;
  port: number;
}

export interface GoogleBeyondcorpAppConnectionArgsGateway {
  app_gateway: string;
  type?: string;
}

export interface GoogleBeyondcorpAppConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBeyondcorpAppConnectionArgs {
  connectors?: string[];
  display_name?: string;
  labels?: { [key: string]: string };
  name: string;
  region?: string;
  type?: string;
  application_endpoint: GoogleBeyondcorpAppConnectionArgsApplicationEndpoint;
  gateway?: GoogleBeyondcorpAppConnectionArgsGateway;
  timeouts?: GoogleBeyondcorpAppConnectionArgsTimeouts;
}

export class google_beyondcorp_app_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBeyondcorpAppConnectionArgs) {
    const meta = {application_endpoint:{isBlock:true},gateway:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_beyondcorp_app_connection", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
