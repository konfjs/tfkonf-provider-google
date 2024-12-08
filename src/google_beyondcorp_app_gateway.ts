import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBeyondcorpAppGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBeyondcorpAppGatewayArgs {
  display_name?: string;
  host_type?: string;
  labels?: { [key: string]: string };
  name: string;
  region?: string;
  type?: string;
  timeouts?: GoogleBeyondcorpAppGatewayArgsTimeouts;
}

export class google_beyondcorp_app_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBeyondcorpAppGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_beyondcorp_app_gateway", resourceName);
  }

  get allocated_connections(): string {
    return `${this.resourceType}.${this.resourceName}.allocated_connections`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }
}
