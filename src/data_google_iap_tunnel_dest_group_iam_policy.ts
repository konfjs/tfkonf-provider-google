import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapTunnelDestGroupIamPolicyArgs {
  dest_group: string;
}

export class data_google_iap_tunnel_dest_group_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleIapTunnelDestGroupIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_tunnel_dest_group_iam_policy", resourceName);
  }

  get dest_group(): string {
    return `data.${this.resourceType}.${this.resourceName}.dest_group`;
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

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
