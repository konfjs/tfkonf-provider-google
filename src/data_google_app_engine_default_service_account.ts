import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAppEngineDefaultServiceAccountArgs {
}

export class data_google_app_engine_default_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleAppEngineDefaultServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_app_engine_default_service_account", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `data.${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get unique_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.unique_id`;
  }
}
