/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ROLES } from "../constants";
import { getCharacterScenes } from "../utils";

const SceneSelection = ({
  selectedRole,
  selectedScene,
  onRoleSelect,
  onSceneSelect,
}) => {
  return (
    <div className="space-y-6">
      {/* Role Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Select Your Role
        </label>
        <Select value={selectedRole} onValueChange={onRoleSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a role..." />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(ROLES).map(([roleId, role]) => (
              <SelectItem key={roleId} value={roleId}>
                <div className="py-1">
                  <div className="font-medium">{role.character}</div>
                  <div className="text-sm text-gray-500">
                    Played by: {role.actor}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Scene Selection */}
      {selectedRole && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Scene
          </label>
          <Select value={selectedScene} onValueChange={onSceneSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a scene..." />
            </SelectTrigger>
            <SelectContent>
              {getCharacterScenes(selectedRole).map((scene) => (
                <SelectItem key={scene.id} value={scene.id}>
                  <div className="py-1">
                    <div className="font-medium">{scene.title}</div>
                    <div className="text-sm text-gray-500">
                      Location: {scene.location}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default SceneSelection;
