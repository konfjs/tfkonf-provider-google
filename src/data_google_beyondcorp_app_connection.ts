import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBeyondcorpAppConnectionArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_beyondcorp_app_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBeyondcorpAppConnectionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_beyondcorp_app_connection", resourceName);
  }

  get application_endpoint(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_endpoint`;
  }

  get connectors(): string {
    return `data.${this.resourceType}.${this.resourceName}.connectors`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get gateway(): string {
    return `data.${this.resourceType}.${this.resourceName}.gateway`;
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

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
