import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDnsKeysArgs {
  managed_zone: string;
}

export class data_google_dns_keys extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDnsKeysArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dns_keys", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_signing_keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_signing_keys`;
  }

  get managed_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_zone`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get zone_signing_keys(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone_signing_keys`;
  }
}
