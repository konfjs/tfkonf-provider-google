import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDnsManagedZoneIamPolicyArgs {
  managed_zone: string;
}

export class data_google_dns_managed_zone_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDnsManagedZoneIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dns_managed_zone_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_zone`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
