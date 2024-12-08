import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelDestGroupIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelDestGroupIamBindingArgs {
  dest_group: string;
  members: string[];
  role: string;
  condition?: GoogleIapTunnelDestGroupIamBindingArgsCondition;
}

export class google_iap_tunnel_dest_group_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapTunnelDestGroupIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_dest_group_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
