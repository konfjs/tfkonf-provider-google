import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelIamBindingArgs {
  members: string[];
  role: string;
  condition?: GoogleIapTunnelIamBindingArgsCondition;
}

export class google_iap_tunnel_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapTunnelIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
