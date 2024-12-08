import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocAutoscalingPolicyIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocAutoscalingPolicyIamMemberArgs {
  member: string;
  policy_id: string;
  role: string;
  condition?: GoogleDataprocAutoscalingPolicyIamMemberArgsCondition;
}

export class google_dataproc_autoscaling_policy_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocAutoscalingPolicyIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_autoscaling_policy_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
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
