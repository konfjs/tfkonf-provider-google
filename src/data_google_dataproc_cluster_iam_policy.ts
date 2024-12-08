import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataprocClusterIamPolicyArgs {
  cluster: string;
}

export class data_google_dataproc_cluster_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataprocClusterIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataproc_cluster_iam_policy", resourceName);
  }

  get cluster(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster`;
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
