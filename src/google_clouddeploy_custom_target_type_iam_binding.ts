import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddeployCustomTargetTypeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleClouddeployCustomTargetTypeIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleClouddeployCustomTargetTypeIamBindingArgsCondition;
}

export class google_clouddeploy_custom_target_type_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleClouddeployCustomTargetTypeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_clouddeploy_custom_target_type_iam_binding", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
