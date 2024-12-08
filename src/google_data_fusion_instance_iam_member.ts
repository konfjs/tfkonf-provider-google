import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataFusionInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataFusionInstanceIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleDataFusionInstanceIamMemberArgsCondition;
}

export class google_data_fusion_instance_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataFusionInstanceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_fusion_instance_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
