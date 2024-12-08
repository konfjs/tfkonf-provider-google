import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDnsManagedZonesArgs {
  project?: string;
}

export class data_google_dns_managed_zones extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDnsManagedZonesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dns_managed_zones", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zones(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_zones`;
  }
}
