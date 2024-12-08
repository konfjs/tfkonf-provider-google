import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsManagedZoneIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDnsManagedZoneIamBindingArgs {
  managed_zone: string;
  members: string[];
  role: string;
  condition?: GoogleDnsManagedZoneIamBindingArgsCondition;
}

export class google_dns_managed_zone_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dns_managed_zone_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
