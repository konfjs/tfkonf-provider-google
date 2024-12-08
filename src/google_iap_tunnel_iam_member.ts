import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelIamMemberArgs {
  member: string;
  role: string;
  condition?: GoogleIapTunnelIamMemberArgsCondition;
}

export class google_iap_tunnel_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapTunnelIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_iam_member", resourceName);
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

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
