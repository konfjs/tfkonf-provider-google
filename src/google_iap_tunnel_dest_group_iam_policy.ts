import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelDestGroupIamPolicyArgs {
  dest_group: string;
  policy_data: string;
}

export class google_iap_tunnel_dest_group_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapTunnelDestGroupIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_iap_tunnel_dest_group_iam_policy", resourceName);
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
