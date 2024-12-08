import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataprocAutoscalingPolicyIamPolicyArgs {
  policy_id: string;
}

export class data_google_dataproc_autoscaling_policy_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataprocAutoscalingPolicyIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataproc_autoscaling_policy_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get policy_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
