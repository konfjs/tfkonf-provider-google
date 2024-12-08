import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudfunctions2FunctionArgs {
  location: string;
  name: string;
  project?: string;
}

export class data_google_cloudfunctions2_function extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudfunctions2FunctionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloudfunctions2_function", resourceName);
  }

  get build_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.build_config`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get environment(): string {
    return `data.${this.resourceType}.${this.resourceName}.environment`;
  }

  get event_trigger(): string {
    return `data.${this.resourceType}.${this.resourceName}.event_trigger`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get service_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_config`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }
}
