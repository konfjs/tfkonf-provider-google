import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapClientArgs {
  brand: string;
  client_id: string;
}

export class data_google_iap_client extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleIapClientArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_client", resourceName);
  }

  get brand(): string {
    return `data.${this.resourceType}.${this.resourceName}.brand`;
  }

  get client_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_id`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get secret(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret`;
  }
}
