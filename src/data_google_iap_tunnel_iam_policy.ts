import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapTunnelIamPolicyArgs {
}

export class data_google_iap_tunnel_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleIapTunnelIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_tunnel_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
