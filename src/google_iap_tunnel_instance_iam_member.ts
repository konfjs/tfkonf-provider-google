import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelInstanceIamMemberArgs {
  instance: string;
  member: string;
  role: string;
  condition?: GoogleIapTunnelInstanceIamMemberArgsCondition;
}

export class google_iap_tunnel_instance_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapTunnelInstanceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_instance_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
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

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
