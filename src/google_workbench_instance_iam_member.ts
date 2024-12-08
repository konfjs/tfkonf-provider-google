import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleWorkbenchInstanceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleWorkbenchInstanceIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleWorkbenchInstanceIamMemberArgsCondition;
}

export class google_workbench_instance_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleWorkbenchInstanceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_workbench_instance_iam_member", resourceName);
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
