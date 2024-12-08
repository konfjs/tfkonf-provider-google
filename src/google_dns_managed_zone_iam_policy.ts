import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsManagedZoneIamPolicyArgs {
  managed_zone: string;
  policy_data: string;
}

export class google_dns_managed_zone_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dns_managed_zone_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zone(): string {
    return `${this.resourceType}.${this.resourceName}.managed_zone`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
