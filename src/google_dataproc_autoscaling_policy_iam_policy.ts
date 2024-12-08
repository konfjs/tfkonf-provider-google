import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocAutoscalingPolicyIamPolicyArgs {
  policy_data: string;
  policy_id: string;
}

export class google_dataproc_autoscaling_policy_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocAutoscalingPolicyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataproc_autoscaling_policy_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
