import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSecureSourceManagerInstanceIamBindingArgs {
  instance_id: string;
  members: string[];
  role: string;
  condition?: GoogleSecureSourceManagerInstanceIamBindingArgsCondition;
}

export class google_secure_source_manager_instance_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecureSourceManagerInstanceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_instance_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
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
