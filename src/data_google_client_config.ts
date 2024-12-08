import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleClientConfigArgs {
}

export class data_google_client_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleClientConfigArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_client_config", resourceName);
  }

  get access_token(): string {
    return `data.${this.resourceType}.${this.resourceName}.access_token`;
  }

  get default_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_labels`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
