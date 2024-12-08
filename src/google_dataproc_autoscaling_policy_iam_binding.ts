import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocAutoscalingPolicyIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocAutoscalingPolicyIamBindingArgs {
  members: string[];
  policy_id: string;
  role: string;
  condition?: GoogleDataprocAutoscalingPolicyIamBindingArgsCondition;
}

export class google_dataproc_autoscaling_policy_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocAutoscalingPolicyIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_autoscaling_policy_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get policy_id(): string {
    return `${this.resourceType}.${this.resourceName}.policy_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
