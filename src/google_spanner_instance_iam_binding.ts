import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSpannerInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition?: GoogleSpannerInstanceIamBindingArgsCondition;
}

export class google_spanner_instance_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerInstanceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_instance_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
