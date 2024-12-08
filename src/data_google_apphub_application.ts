import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleApphubApplicationArgs {
  application_id: string;
  location: string;
  project: string;
}

export class data_google_apphub_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleApphubApplicationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_apphub_application", resourceName);
  }

  get application_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.application_id`;
  }

  get attributes(): string {
    return `data.${this.resourceType}.${this.resourceName}.attributes`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
