import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelDestGroupIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelDestGroupIamMemberArgs {
  dest_group: string;
  member: string;
  role: string;
  condition?: GoogleIapTunnelDestGroupIamMemberArgsCondition;
}

export class google_iap_tunnel_dest_group_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapTunnelDestGroupIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_dest_group_iam_member", resourceName);
  }

  get dest_group(): string {
    return `${this.resourceType}.${this.resourceName}.dest_group`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
