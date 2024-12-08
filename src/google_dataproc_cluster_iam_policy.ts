import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocClusterIamPolicyArgs {
  cluster: string;
  policy_data: string;
}

export class google_dataproc_cluster_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocClusterIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataproc_cluster_iam_policy", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
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
