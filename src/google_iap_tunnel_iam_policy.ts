import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelIamPolicyArgs {
  policy_data: string;
}

export class google_iap_tunnel_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapTunnelIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
