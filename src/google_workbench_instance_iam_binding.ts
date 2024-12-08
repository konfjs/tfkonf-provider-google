import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleWorkbenchInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleWorkbenchInstanceIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleWorkbenchInstanceIamBindingArgsCondition;
}

export class google_workbench_instance_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleWorkbenchInstanceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_workbench_instance_iam_binding", resourceName);
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
