import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsManagedZoneIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDnsManagedZoneIamMemberArgs {
  managed_zone: string;
  member: string;
  role: string;
  condition?: GoogleDnsManagedZoneIamMemberArgsCondition;
}

export class google_dns_managed_zone_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDnsManagedZoneIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dns_managed_zone_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
