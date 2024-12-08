import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBeyondcorpAppConnectorArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_beyondcorp_app_connector extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleBeyondcorpAppConnectorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_beyondcorp_app_connector", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get principal_info(): string {
    return `data.${this.resourceType}.${this.resourceName}.principal_info`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
