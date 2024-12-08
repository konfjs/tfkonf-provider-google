import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDnsManagedZoneArgs {
  name: string;
  project?: string;
}

export class data_google_dns_managed_zone extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDnsManagedZoneArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dns_managed_zone", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zone_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_zone_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get name_servers(): string {
    return `data.${this.resourceType}.${this.resourceName}.name_servers`;
  }

  get visibility(): string {
    return `data.${this.resourceType}.${this.resourceName}.visibility`;
  }
}
