import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksEnvironmentArgsContainerImage {
  repository: string;
  tag?: string;
}

export interface GoogleNotebooksEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNotebooksEnvironmentArgsVmImage {
  image_family?: string;
  image_name?: string;
  project: string;
}

export interface GoogleNotebooksEnvironmentArgs {
  description?: string;
  display_name?: string;
  location: string;
  name: string;
  post_startup_script?: string;
  container_image?: GoogleNotebooksEnvironmentArgsContainerImage;
  timeouts?: GoogleNotebooksEnvironmentArgsTimeouts;
  vm_image?: GoogleNotebooksEnvironmentArgsVmImage;
}

export class google_notebooks_environment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNotebooksEnvironmentArgs) {
    const meta = {container_image:{isBlock:true},timeouts:{isBlock:true},vm_image:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_notebooks_environment", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
