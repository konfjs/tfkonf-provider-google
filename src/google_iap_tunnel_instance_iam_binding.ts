import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition?: GoogleIapTunnelInstanceIamBindingArgsCondition;
}

export class google_iap_tunnel_instance_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapTunnelInstanceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_instance_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
