import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBeyondcorpAppGatewayArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_beyondcorp_app_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBeyondcorpAppGatewayArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_beyondcorp_app_gateway", resourceName);
  }

  get allocated_connections(): string {
    return `data.${this.resourceType}.${this.resourceName}.allocated_connections`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get host_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.host_type`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }

  get uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.uri`;
  }
}
